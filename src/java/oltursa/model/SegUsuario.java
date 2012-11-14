package oltursa.model;

import java.util.Date;

public class SegUsuario {
    private String co_usuario;

    private String de_usuario;

    private String de_cargo;

    private Date fe_creacion;

    private String co_usuariocreacion;

    private Date fe_modificacion;

    private String co_usuariomodificacion;

    private Date fe_eliminacion;

    private String co_usuarioeliminacion;

    private String co_claveacceso;

    private String st_dscto_cargo;

    private Short pc_dscto_cargo;

    private String co_usuarioanterior;

    public String getCo_usuario() {
        return co_usuario;
    }

    public void setCo_usuario(String co_usuario) {
        this.co_usuario = co_usuario;
    }

    public String getDe_usuario() {
        return de_usuario;
    }

    public void setDe_usuario(String de_usuario) {
        this.de_usuario = de_usuario;
    }

    public String getDe_cargo() {
        return de_cargo;
    }

    public void setDe_cargo(String de_cargo) {
        this.de_cargo = de_cargo;
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

    public String getCo_claveacceso() {
        return co_claveacceso;
    }

    public void setCo_claveacceso(String co_claveacceso) {
        this.co_claveacceso = co_claveacceso;
    }

    public String getSt_dscto_cargo() {
        return st_dscto_cargo;
    }

    public void setSt_dscto_cargo(String st_dscto_cargo) {
        this.st_dscto_cargo = st_dscto_cargo;
    }

    public Short getPc_dscto_cargo() {
        return pc_dscto_cargo;
    }

    public void setPc_dscto_cargo(Short pc_dscto_cargo) {
        this.pc_dscto_cargo = pc_dscto_cargo;
    }

    public String getCo_usuarioanterior() {
        return co_usuarioanterior;
    }

    public void setCo_usuarioanterior(String co_usuarioanterior) {
        this.co_usuarioanterior = co_usuarioanterior;
    }
}