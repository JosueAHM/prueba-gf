import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Typography,
  Avatar,
  Chip,
  IconButton,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";

function UserTable({ users, loading, onEdit, onDelete }) {
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <TableContainer
      component={Box}
      sx={{ border: "1px solid #f1f5f9", borderRadius: 2 }}
    >
      <Table sx={{ minWidth: 650 }}>
        <TableHead sx={{ bgcolor: "#f8fafc" }}>
          <TableRow>
            <TableCell sx={{ fontWeight: 600 }}>Usuario</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Identificación</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Correo Personal</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Celular</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Estado Civil</TableCell>
            <TableCell align="center" sx={{ fontWeight: 600 }}>
              Acciones
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={6}
                align="center"
                sx={{ py: 3, color: "text.secondary" }}
              >
                No se encontraron usuarios registrados.
              </TableCell>
            </TableRow>
          ) : (
            users.map((user) => (
              <TableRow key={user.id} hover>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      sx={{
                        bgcolor:
                          user.sexo === "Masculino" ? "#dbeafe" : "#fce7f3",
                        color:
                          user.sexo === "Masculino" ? "#2563eb" : "#db2777",
                      }}
                    >
                      {user.nombres.charAt(0)}
                      {user.apellidos.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {user.nombres} {user.apellidos}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        @{user.username}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>{user.identificacion}</TableCell>
                <TableCell>{user.correo_personal}</TableCell>
                <TableCell>{user.celular}</TableCell>
                <TableCell>
                  <Chip
                    label={user.estado_civil}
                    size="small"
                    variant="outlined"
                    color={user.estado_civil === "Soltero" ? "primary" : "success"}
                  />
                </TableCell>
                <TableCell align="center">
                  <Tooltip title="Editar">
                    <IconButton color="primary" onClick={() => onEdit(user)}>
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Eliminar">
                    <IconButton color="secondary" onClick={() => onDelete(user.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserTable;
