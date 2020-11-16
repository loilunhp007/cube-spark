package tik.test.cubespark.repository.Product;

import org.springframework.data.jpa.repository.JpaRepository;

import tik.test.cubespark.model.Product.Product;

public interface ProductRepository extends JpaRepository<Product, String>{
	
}
