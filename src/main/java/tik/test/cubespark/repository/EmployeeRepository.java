package tik.test.cubespark.repository;

import org.springframework.data.repository.CrudRepository;

import tik.test.cubespark.model.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Long>{
	
}
