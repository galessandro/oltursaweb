package oltursa.dao;

import oltursa.model.SegRol;
import org.apache.ibatis.annotations.Param;

public interface SegRolDAO {
    int deleteByPrimaryKey(@Param("co_sistema") String co_sistema, @Param("co_rol") String co_rol);

    int insert(SegRol record);

    int insertSelective(SegRol record);

    SegRol selectByPrimaryKey(@Param("co_sistema") String co_sistema, @Param("co_rol") String co_rol);

    int updateByPrimaryKeySelective(SegRol record);

    int updateByPrimaryKey(SegRol record);
}