package net.javaguides.springboot.controller;

import java.security.SecureRandom;
import java.time.Instant;
import java.util.*;
import java.util.stream.Collectors;

import net.javaguides.springboot.exception.CouldNotCreateException;
import net.javaguides.springboot.model.ShortURL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.repository.ShortURLRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/shortURL")
public class ShortURLController {

	@Autowired
	private ShortURLRepository shortURLRepository;

	// create dto rest api
	@PostMapping("")
	public ShortURLDTO createShortURL(@RequestBody ShortURLDTO dto) {
		int retry = 0;
		while(retry < 10) {

			try {
				ShortURL entity = ShortURLDTOtoEntityMapper.toEntity(dto);
				entity.setShortURL(generateShortURL());
				entity.setCreatedDate(Instant.now());
				return ShortURLDTOtoEntityMapper.toDto(shortURLRepository.save(entity));
			}
			catch (Exception e){
			System.out.println(e.getMessage());
			}
			retry++;
		}
		throw new CouldNotCreateException("Could not create short URL");
	}
	
	// get shortURL by id rest api
	@GetMapping("/{id}")
	public ResponseEntity<ShortURLDTO> getShortURLById(@PathVariable Long id) {
		ShortURLDTO shortURL = ShortURLDTOtoEntityMapper.toDto(shortURLRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("ShortURL not exist with id :" + id)));
		return ResponseEntity.ok(shortURL);
	}

	// delete employee rest api
	@DeleteMapping("/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		ShortURL shortURL = shortURLRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("ShortURL not exist with id :" + id));
		
		shortURLRepository.delete(shortURL);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	private String generateShortURL(){
		String upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

		String lower = upper.toLowerCase(Locale.ROOT);

		String digits = "0123456789";

		String alphanum = upper + lower + digits;
		Random random = new SecureRandom();
		char[] symbols = alphanum.toCharArray();
		char[] buf = new char[8];
		for (int idx = 0; idx < 8; ++idx)
			buf[idx] = symbols[random.nextInt(symbols.length)];
		return new String(buf);
	}
}
