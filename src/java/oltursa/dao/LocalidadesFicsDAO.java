package oltursa.dao;

import oltursa.model.LocalidadesFics;

public interface LocalidadesFicsDAO {
    int insert(LocalidadesFics record);

    int insertSelective(LocalidadesFics record);
}