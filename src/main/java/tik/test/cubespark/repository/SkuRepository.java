package tik.test.cubespark.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tik.test.cubespark.model.Sku;

@Repository
public interface SkuRepository extends JpaRepository<Sku, String>{
	
}
