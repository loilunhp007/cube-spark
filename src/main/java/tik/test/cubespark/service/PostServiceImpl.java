package tik.test.cubespark.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import tik.test.cubespark.model.Post;
import tik.test.cubespark.repository.PostRepository;

public class PostServiceImpl implements PostService{

	@Autowired
	private PostRepository postRepository;
	
	@Override
	public List<Post> listPost() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ResponseEntity<?> findById(Long postId) {
		Optional<Post> postOptional = postRepository.findById(postId);
        return postOptional.map(post -> ResponseEntity.ok().body(post)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}

	@Override
	public Post savePost(Post post) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deletePost(Long postId) {
		// TODO Auto-generated method stub
		
	}

}