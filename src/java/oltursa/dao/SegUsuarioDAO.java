package oltursa.dao;

import oltursa.model.SegUsuario;

public interface SegUsuarioDAO {
    int deleteByPrimaryKey(String co_usuario);

    int insert(SegUsuario record);

    int insertSelective(SegUsuario record);

    SegUsuario selectByPrimaryKey(String co_usuario);

    int updateByPrimaryKeySelective(SegUsuario record);

    int updateByPrimaryKey(SegUsuario record);
}