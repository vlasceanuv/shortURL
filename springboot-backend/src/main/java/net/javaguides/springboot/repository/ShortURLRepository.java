package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.ShortURL;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface ShortURLRepository extends JpaRepository<ShortURL, Long>{

    List<ShortURL> findByShortURL(String shortURL);
}
