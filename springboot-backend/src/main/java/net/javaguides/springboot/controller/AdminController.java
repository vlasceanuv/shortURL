package net.javaguides.springboot.controller;

import net.javaguides.springboot.model.User;
import net.javaguides.springboot.repository.ShortURLAuditRepository;
import net.javaguides.springboot.repository.ShortURLRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/admin")
public class AdminController {

	@Autowired
	private ShortURLRepository shortURLRepository;

	@Autowired
	private ShortURLAuditRepository shortURLAuditRepository;

	@GetMapping("/statistics")
	public List<StatisticsDTO> getOriginalURLFromShortURL(){

		return shortURLRepository.findAll().stream().map(entity-> {
			StatisticsDTO dto = StatisticsDTOtoEntityMapper.toDto(entity);
			dto.setUsage(shortURLAuditRepository.getByShortURLId(entity).size());
			return dto;
		}).collect(Collectors.toList());
	}

	@GetMapping(produces = "application/json")
	@RequestMapping({ "/validateLogin" })
	public User validateLogin() {
		return new User("User successfully authenticated");
	}

}
