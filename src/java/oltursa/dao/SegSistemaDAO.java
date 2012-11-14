package oltursa.dao;

import oltursa.model.SegSistema;

public interface SegSistemaDAO {
    int deleteByPrimaryKey(String co_sistema);

    int insert(SegSistema record);

    int insertSelective(SegSistema record);

    SegSistema selectByPrimaryKey(String co_sistema);

    int updateByPrimaryKeySelective(SegSistema record);

    int updateByPrimaryKey(SegSistema record);
}