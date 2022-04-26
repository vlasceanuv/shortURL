package net.javaguides.springboot.controller;

import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class StatisticsDTO {
    public Long id;
    public String shortURL;
    public String originalURL;
    public String createdDate;
    public Integer usage;
}
