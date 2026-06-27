import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Button,
  Grid
} from "@mui/material";

function UserFormDialog({
  open,
  onClose,
  onSubmit,
  formData,
  onChange,
  errors,
  isEdit,
}) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ fontWeight: 700, pb: 1 }}>
        {isEdit ? "Editar Usuario" : "Registrar Nuevo Usuario"}
      </DialogTitle>
      <form onSubmit={onSubmit}>
        <DialogContent sx={{ pt: 2 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                name="identificacion"
                label="Identificación / Cédula"
                value={formData.identificacion}
                onChange={onChange}
                error={!!errors.identificacion}
                helperText={errors.identificacion?.[0] || ""}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                name="username"
                label="Nombre de Usuario (Username)"
                value={formData.username}
                onChange={onChange}
                error={!!errors.username}
                helperText={errors.username?.[0] || ""}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                name="nombres"
                label="Nombres"
                value={formData.nombres}
                onChange={onChange}
                error={!!errors.nombres}
                helperText={errors.nombres?.[0] || ""}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                name="apellidos"
                label="Apellidos"
                value={formData.apellidos}
                onChange={onChange}
                error={!!errors.apellidos}
                helperText={errors.apellidos?.[0] || ""}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                type="date"
                name="fecha_nacimiento"
                label="Fecha de Nacimiento"
                InputLabelProps={{ shrink: true }}
                value={formData.fecha_nacimiento}
                onChange={onChange}
                error={!!errors.fecha_nacimiento}
                helperText={errors.fecha_nacimiento?.[0] || ""}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                select
                fullWidth
                name="sexo"
                label="Sexo"
                value={formData.sexo}
                onChange={onChange}
                error={!!errors.sexo}
                helperText={errors.sexo?.[0] || ""}
              >
                <MenuItem value="Masculino">Masculino</MenuItem>
                <MenuItem value="Femenino">Femenino</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                name="celular"
                label="Número Celular"
                value={formData.celular}
                onChange={onChange}
                error={!!errors.celular}
                helperText={errors.celular?.[0] || ""}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                name="telefono"
                label="Teléfono Fijo (Opcional)"
                value={formData.telefono}
                onChange={onChange}
                error={!!errors.telefono}
                helperText={errors.telefono?.[0] || ""}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                type="email"
                name="correo_personal"
                label="Correo Electrónico Personal"
                value={formData.correo_personal}
                onChange={onChange}
                error={!!errors.correo_personal}
                helperText={errors.correo_personal?.[0] || ""}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                select
                fullWidth
                name="estado_civil"
                label="Estado Civil"
                value={formData.estado_civil}
                onChange={onChange}
                error={!!errors.estado_civil}
                helperText={errors.estado_civil?.[0] || ""}
              >
                <MenuItem value="Soltero">Soltero</MenuItem>
                <MenuItem value="Casado">Casado</MenuItem>
                <MenuItem value="Divorciado">Divorciado</MenuItem>
                <MenuItem value="Viudo">Viudo</MenuItem>
                <MenuItem value="Unión Libre">Unión Libre</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                multiline
                rows={2}
                name="direccion"
                label="Dirección o ubicación"
                value={formData.direccion}
                onChange={onChange}
                error={!!errors.direccion}
                helperText={errors.direccion?.[0] || ""}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button onClick={onClose} color="inherit">
            Cancelar
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Guardar Usuario
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default UserFormDialog;
