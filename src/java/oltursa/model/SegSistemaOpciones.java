package oltursa.model;

import java.util.Date;

public class SegSistemaOpciones {
    private String co_sistema;

    private Short co_opcion;

    private String de_opcion;

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

    public Short getCo_opcion() {
        return co_opcion;
    }

    public void setCo_opcion(Short co_opcion) {
        this.co_opcion = co_opcion;
    }

    public String getDe_opcion() {
        return de_opcion;
    }

    public void setDe_opcion(String de_opcion) {
        this.de_opcion = de_opcion;
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