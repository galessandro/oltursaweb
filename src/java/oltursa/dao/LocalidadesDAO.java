package oltursa.dao;

import oltursa.model.Localidades;

public interface LocalidadesDAO {
    int insert(Localidades record);

    int insertSelective(Localidades record);
}