package oltursa.model;

import java.util.Date;

public class SegRol {
    private String co_sistema;

    private String co_rol;

    private String de_rol;

    private Date fe_creacion;

    private String co_usuariocreacion;

    private Date fe_modificacion;

    private String co_usuariomodificacion;

    private Date fe_eliminacion;

    private String co_usuarioeliminacion;

    public String getCo_sistema() {
        return co_sistema;
    }

    public void setCo_sistema(String co_sistema) {
        this.co_sistema = co_sistema;
    }

    public String getCo_rol() {
        return co_rol;
    }

    public void setCo_rol(String co_rol) {
        this.co_rol = co_rol;
    }

    public String getDe_rol() {
        return de_rol;
    }

    public void setDe_rol(String de_rol) {
        this.de_rol = de_rol;
    }

    public Date getFe_creacion() {
        return fe_creacion;
    }

    public void setFe_creacion(Date fe_creacion) {
        this.fe_creacion = fe_creacion;
    }

    public String getCo_usuariocreacion() {
        return co_usuariocreacion;
    }

    public void setCo_usuariocreacion(String co_usuariocreacion) {
        this.co_usuariocreacion = co_usuariocreacion;
    }

    public Date getFe_modificacion() {
        return fe_modificacion;
    }

    public void setFe_modificacion(Date fe_modificacion) {
        this.fe_modificacion = fe_modificacion;
    }

    public String getCo_usuariomodificacion() {
        return co_usuariomodificacion;
    }

    public void setCo_usuariomodificacion(String co_usuariomodificacion) {
        this.co_usuariomodificacion = co_usuariomodificacion;
    }

    public Date getFe_eliminacion() {
        return fe_eliminacion;
    }

    public void setFe_eliminacion(Date fe_eliminacion) {
        this.fe_eliminacion = fe_eliminacion;
    }

    public String getCo_usuarioeliminacion() {
        return co_usuarioeliminacion;
    }

    public void setCo_usuarioeliminacion(String co_usuarioeliminacion) {
        this.co_usuarioeliminacion = co_usuarioeliminacion;
    }
}