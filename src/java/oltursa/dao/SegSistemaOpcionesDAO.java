package oltursa.dao;

import oltursa.model.SegSistemaOpciones;
import org.apache.ibatis.annotations.Param;

public interface SegSistemaOpcionesDAO {
    int deleteByPrimaryKey(@Param("co_sistema") String co_sistema, @Param("co_opcion") Short co_opcion);

    int insert(SegSistemaOpciones record);

    int insertSelective(SegSistemaOpciones record);

    SegSistemaOpciones selectByPrimaryKey(@Param("co_sistema") String co_sistema, @Param("co_opcion") Short co_opcion);

    int updateByPrimaryKeySelective(SegSistemaOpciones record);

    int updateByPrimaryKey(SegSistemaOpciones record);
}