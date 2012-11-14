package oltursa.model;

public class LocalidadesFics {
    private Integer id;

    private String nombre;

    private Integer provincia;

    private Integer partido;

    private Byte tipoCodPostal;

    private String codPostal;

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

    public Integer getPartido() {
        return partido;
    }

    public void setPartido(Integer partido) {
        this.partido = partido;
    }

    public Byte getTipoCodPostal() {
        return tipoCodPostal;
    }

    public void setTipoCodPostal(Byte tipoCodPostal) {
        this.tipoCodPostal = tipoCodPostal;
    }

    public String getCodPostal() {
        return codPostal;
    }

    public void setCodPostal(String codPostal) {
        this.codPostal = codPostal;
    }
}