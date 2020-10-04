package tik.test.cubespark.service;

import java.util.List;
import org.springframework.http.ResponseEntity;
import tik.test.cubespark.model.Post;

public interface PostService {
	List<Post> listPost();
	
	ResponseEntity<?> findById(Long postId);
	
    Post savePost(Post post);

    void deletePost(Long postId);
}
