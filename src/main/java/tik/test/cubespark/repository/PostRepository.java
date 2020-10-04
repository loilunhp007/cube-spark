package tik.test.cubespark.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import tik.test.cubespark.model.Post;

public interface PostRepository extends JpaRepository<Post, Long> {

}
