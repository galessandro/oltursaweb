package oltursa.model;

public class Terminales {
    private Integer id;

    private String nombre;

    private Integer localidad;

    private String calle;

    private Short altura;

    private Byte piso;

    private String departamento;

    private String codPostal;

    private String telefonos;

    private String email;

    private Byte predeterminada;

    private String codigo;

    private Double latitud;

    private Double longitud;

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

    public Integer getLocalidad() {
        return localidad;
    }

    public void setLocalidad(Integer localidad) {
        this.localidad = localidad;
    }

    public String getCalle() {
        return calle;
    }

    public void setCalle(String calle) {
        this.calle = calle;
    }

    public Short getAltura() {
        return altura;
    }

    public void setAltura(Short altura) {
        this.altura = altura;
    }

    public Byte getPiso() {
        return piso;
    }

    public void setPiso(Byte piso) {
        this.piso = piso;
    }

    public String getDepartamento() {
        return departamento;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }

    public String getCodPostal() {
        return codPostal;
    }

    public void setCodPostal(String codPostal) {
        this.codPostal = codPostal;
    }

    public String getTelefonos() {
        return telefonos;
    }

    public void setTelefonos(String telefonos) {
        this.telefonos = telefonos;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Byte getPredeterminada() {
        return predeterminada;
    }

    public void setPredeterminada(Byte predeterminada) {
        this.predeterminada = predeterminada;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public Double getLatitud() {
        return latitud;
    }

    public void setLatitud(Double latitud) {
        this.latitud = latitud;
    }

    public Double getLongitud() {
        return longitud;
    }

    public void setLongitud(Double longitud) {
        this.longitud = longitud;
    }
}