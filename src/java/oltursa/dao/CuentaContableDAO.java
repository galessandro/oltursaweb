package oltursa.dao;

import oltursa.model.CuentaContable;

public interface CuentaContableDAO {
    int insert(CuentaContable record);

    int insertSelective(CuentaContable record);
}