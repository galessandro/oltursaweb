package oltursa.dao;

import oltursa.model.Buses;

public interface BusesDAO {
    int insert(Buses record);

    int insertSelective(Buses record);
}