package net.javaguides.springboot.model;

import lombok.*;

import javax.persistence.*;
import java.time.Instant;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "shortURLAudit")
public class ShortURLAudit {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne
	@JoinColumn(name = "shortURLId")
	private ShortURL shortURLId;
	
	@Column(name = "accessDate")
	private Instant createdDate;
}
