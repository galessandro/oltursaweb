package oltursa.dao;

import oltursa.model.Terminales;

public interface TerminalesDAO {
    int insert(Terminales record);

    int insertSelective(Terminales record);
}