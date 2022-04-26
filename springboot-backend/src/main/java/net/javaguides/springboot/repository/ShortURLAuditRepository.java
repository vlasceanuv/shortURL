package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.ShortURL;
import net.javaguides.springboot.model.ShortURLAudit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShortURLAuditRepository extends JpaRepository<ShortURLAudit, Long>{
    List<ShortURLAudit> getByShortURLId(ShortURL shortURLId);
}
