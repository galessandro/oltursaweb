package oltursa.dao;

import oltursa.model.SegUsuarioSistema;

public interface SegUsuarioSistemaDAO {
    int deleteByPrimaryKey(String co_usuario);

    int insert(SegUsuarioSistema record);

    int insertSelective(SegUsuarioSistema record);

    SegUsuarioSistema selectByPrimaryKey(String co_usuario);

    int updateByPrimaryKeySelective(SegUsuarioSistema record);

    int updateByPrimaryKey(SegUsuarioSistema record);
}