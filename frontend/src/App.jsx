import React, { useState, useEffect } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Paper,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { PersonAdd as AddIcon, Search as SearchIcon } from "@mui/icons-material";
import * as api from "./api";

// Importación de componentes locales
import UserTable from "./components/UserTable";
import UserFormDialog from "./components/UserFormDialog";
import DeleteConfirmDialog from "./components/DeleteConfirmDialog";

// Configuración del Tema de Material UI
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Azul estándar de Material UI
    },
    secondary: {
      main: "#9c27b0", // Púrpura estándar de Material UI
    },
    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
    text: {
      primary: "#0f172a",
      secondary: "#475569",
    },
  },
  typography: {
    fontFamily: "'Outfit', sans-serif",
    h4: {
      fontWeight: 700,
      letterSpacing: "-0.5px",
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500,
          padding: "8px 16px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

const initialFormState = {
  identificacion: "",
  username: "",
  apellidos: "",
  nombres: "",
  fecha_nacimiento: "",
  celular: "",
  telefono: "",
  correo_personal: "",
  estado_civil: "",
  sexo: "",
  direccion: "",
};

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Estados del Formulario (Crear/Editar)
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [editId, setEditId] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  // Estados de Diálogo de Confirmación de Borrado
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // Estados de Feedback (Toasts)
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Obtener usuarios al cargar la aplicación
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await api.getUsers();
      setUsers(response.data);
    } catch (error) {
      showToast("Error al conectar con la API del backend.", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const showToast = (message, severity = "success") => {
    setToast({ open: true, message, severity });
  };

  const handleCloseToast = () => {
    setToast({ ...toast, open: false });
  };

  // Manejar cambios en las entradas del formulario
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: null });
    }
  };

  // Abrir formulario para Crear
  const handleCreateOpen = () => {
    setFormData(initialFormState);
    setFormErrors({});
    setEditId(null);
    setOpenForm(true);
  };

  // Abrir formulario para Editar
  const handleEditOpen = (user) => {
    setFormData({
      identificacion: user.identificacion || "",
      username: user.username || "",
      apellidos: user.apellidos || "",
      nombres: user.nombres || "",
      fecha_nacimiento: user.fecha_nacimiento
        ? user.fecha_nacimiento.substring(0, 10)
        : "",
      celular: user.celular || "",
      telefono: user.telefono || "",
      correo_personal: user.correo_personal || "",
      estado_civil: user.estado_civil || "",
      sexo: user.sexo || "",
      direccion: user.direccion || "",
    });
    setFormErrors({});
    setEditId(user.id);
    setOpenForm(true);
  };

  // Enviar el Formulario (Guardar)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormErrors({});
    try {
      if (editId) {
        await api.updateUser(editId, formData);
        showToast("Usuario actualizado con éxito.");
      } else {
        await api.createUser(formData);
        showToast("Usuario registrado con éxito.");
      }
      setOpenForm(false);
      fetchUsers();
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setFormErrors(error.response.data.errors);
        showToast(
          "Por favor verifica los campos obligatorios o duplicados.",
          "error"
        );
      } else {
        showToast(
          "Ocurrió un error inesperado al procesar el usuario.",
          "error"
        );
      }
    }
  };

  // Abrir Confirmación de Borrado
  const handleDeleteOpen = (id) => {
    setDeleteId(id);
    setOpenDelete(true);
  };

  // Confirmar Borrado
  const handleDeleteConfirm = async () => {
    try {
      await api.deleteUser(deleteId);
      showToast("Usuario eliminado con éxito.");
      setOpenDelete(false);
      fetchUsers();
    } catch (error) {
      showToast("Error al intentar eliminar el usuario.", "error");
    }
  };

  // Filtrado de usuarios
  const filteredUsers = users.filter((user) => {
    const searchString =
      `${user.nombres} ${user.apellidos} ${user.identificacion} ${user.username} ${user.correo_personal}`.toLowerCase();
    return searchString.includes(searchTerm.toLowerCase());
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Barra de Navegación */}
      <AppBar
        position="static"
        elevation={0}
        color="primary"
        sx={{ borderRadius: 0 }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700 }}
          >
            PruebaGF
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {/* Sección de Tabla */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Grid container spacing={2} alignItems="center" sx={{ mb: 3 }}>
            {/* Barra de Búsqueda */}
            <Grid item xs={12} md={9}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Botón de Añadir */}
            <Grid item xs={12} md={3} sx={{ textAlign: "right" }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={handleCreateOpen}
                size="large"
                fullWidth
              >
                Agregar Usuario
              </Button>
            </Grid>
          </Grid>

          {/* Tabla de Usuarios */}
          <UserTable
            users={filteredUsers}
            loading={loading}
            onEdit={handleEditOpen}
            onDelete={handleDeleteOpen}
          />
        </Paper>
      </Container>

      {/* Formulario Dialog (Creación y Edición) */}
      <UserFormDialog
        open={openForm}
        onClose={() => setOpenForm(false)}
        onSubmit={handleFormSubmit}
        formData={formData}
        onChange={handleFormChange}
        errors={formErrors}
        isEdit={!!editId}
      />

      {/* Diálogo de Confirmación de Borrado */}
      <DeleteConfirmDialog
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        onConfirm={handleDeleteConfirm}
      />

      {/* Notificaciones flotantes (Toast) */}
      <Snackbar
        open={toast.open}
        autoHideDuration={4000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseToast}
          severity={toast.severity}
          sx={{ width: "100%" }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default App;
