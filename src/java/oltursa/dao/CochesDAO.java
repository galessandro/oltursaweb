package oltursa.dao;

import oltursa.model.Coches;

public interface CochesDAO {
    int insert(Coches record);

    int insertSelective(Coches record);
}