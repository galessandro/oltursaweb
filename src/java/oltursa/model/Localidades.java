package oltursa.model;

public class Localidades {
    private Integer id;

    private String nombre;

    private Integer provincia;

    private Integer tipoCodpostal;

    private String codpostal;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Integer getProvincia() {
        return provincia;
    }

    public void setProvincia(Integer provincia) {
        this.provincia = provincia;
    }

    public Integer getTipoCodpostal() {
        return tipoCodpostal;
    }

    public void setTipoCodpostal(Integer tipoCodpostal) {
        this.tipoCodpostal = tipoCodpostal;
    }

    public String getCodpostal() {
        return codpostal;
    }

    public void setCodpostal(String codpostal) {
        this.codpostal = codpostal;
    }
}