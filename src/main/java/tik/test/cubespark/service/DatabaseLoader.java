package tik.test.cubespark.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import tik.test.cubespark.model.Employee;
import tik.test.cubespark.repository.EmployeeRepository;

@Component
public class DatabaseLoader implements CommandLineRunner {
	private final EmployeeRepository repository;
	
	@Autowired
	public DatabaseLoader(EmployeeRepository repository) {
			this.repository = repository;
	}
	
	@Override
	public void run(String... strings) throws Exception {
		this.repository.save(new Employee("Frodo", "Baggins", "ring bearer"));
		this.repository.save(new Employee("Tik", "Tok", "ring bearerr"));
	}
}
