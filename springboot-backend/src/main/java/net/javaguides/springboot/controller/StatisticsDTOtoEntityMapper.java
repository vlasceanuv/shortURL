package net.javaguides.springboot.controller;

import net.javaguides.springboot.model.ShortURL;

public class StatisticsDTOtoEntityMapper {
    public static StatisticsDTO toDto(ShortURL shortURL){
        return StatisticsDTO.builder()
                .id(shortURL.getShortURLId())
                .createdDate(shortURL.getCreatedDate().toString())
                .shortURL(shortURL.getShortURL())
                .originalURL(shortURL.getOriginalURL())
                .build();
    }
    public static ShortURL toEntity(StatisticsDTO dto){
        return ShortURL.builder()
                .originalURL(dto.getOriginalURL())
                .build();
    }
}
