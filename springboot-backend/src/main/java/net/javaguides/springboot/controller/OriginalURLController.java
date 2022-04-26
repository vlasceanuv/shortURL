package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.ShortURL;
import net.javaguides.springboot.model.ShortURLAudit;
import net.javaguides.springboot.repository.ShortURLAuditRepository;
import net.javaguides.springboot.repository.ShortURLRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.time.Instant;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/originalURL")
public class OriginalURLController {

    @Autowired
    private ShortURLRepository shortURLRepository;
    @Autowired
    private ShortURLAuditRepository shortURLAuditRepository;
    @GetMapping("/{shortURL}")
    public ShortURLDTO getOriginalURLFromShortURL(@PathVariable String shortURL) {

        Optional<ShortURL> optionalShortURL = shortURLRepository.findByShortURL(shortURL).stream().findFirst();
        if (optionalShortURL.isPresent()) {

            ShortURLDTO shortURLDTO = ShortURLDTOtoEntityMapper.toDto(optionalShortURL.get());
            if(Instant.parse(shortURLDTO.getCreatedDate()).plus(Duration.ofDays(180)).compareTo(Instant.now()) < 0){
                throw new ResourceNotFoundException("could not find Original url for given URL");
            };
            shortURLAuditRepository.save(ShortURLAudit.builder().createdDate(Instant.now()).shortURLId(optionalShortURL.get()).build());
            return shortURLDTO;
        }
        throw new ResourceNotFoundException("could not find Original url for given URL");
    }

}
