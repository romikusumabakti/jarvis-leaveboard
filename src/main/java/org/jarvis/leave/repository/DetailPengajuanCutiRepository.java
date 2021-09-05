package org.jarvis.leave.repository;

import org.jarvis.leave.model.DetailPengajuanCuti;
import org.jarvis.leave.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DetailPengajuanCutiRepository extends JpaRepository<DetailPengajuanCuti, Integer> {

    @Override
    @Query("select u from DetailPengajuanCuti u where u.isDeleted=false")
    List<DetailPengajuanCuti> findAll();

}
