package net.javaguides.springboot.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.Instant;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "shortURL")
public class ShortURL {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long	 shortURLId;
	
	@Column(name = "originalURL")
	private String originalURL;

	@Column(name = "shortURL", unique=true)
	private String shortURL;
	
	@Column(name = "createdDate")
	private Instant createdDate;
}
