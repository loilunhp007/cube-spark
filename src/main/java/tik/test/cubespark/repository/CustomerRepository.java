package tik.test.cubespark.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tik.test.cubespark.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Customer findByName(String name);
}
