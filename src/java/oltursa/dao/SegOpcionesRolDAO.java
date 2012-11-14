package oltursa.dao;

import oltursa.model.SegOpcionesRol;
import org.apache.ibatis.annotations.Param;

public interface SegOpcionesRolDAO {
    int deleteByPrimaryKey(@Param("co_sistema") String co_sistema, @Param("co_rol") String co_rol, @Param("co_opcion") Short co_opcion);

    int insert(SegOpcionesRol record);

    int insertSelective(SegOpcionesRol record);

    SegOpcionesRol selectByPrimaryKey(@Param("co_sistema") String co_sistema, @Param("co_rol") String co_rol, @Param("co_opcion") Short co_opcion);

    int updateByPrimaryKeySelective(SegOpcionesRol record);

    int updateByPrimaryKey(SegOpcionesRol record);
}