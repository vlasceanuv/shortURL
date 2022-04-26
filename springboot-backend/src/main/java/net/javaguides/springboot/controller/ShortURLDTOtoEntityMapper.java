package net.javaguides.springboot.controller;

import net.javaguides.springboot.model.ShortURL;

public class ShortURLDTOtoEntityMapper {
    public static ShortURLDTO toDto(ShortURL shortURL){
        return ShortURLDTO.builder()
                .id(shortURL.getShortURLId())
                .createdDate(shortURL.getCreatedDate().toString())
                .shortURL(shortURL.getShortURL())
                .originalURL(shortURL.getOriginalURL())
                .build();
    }
    public static ShortURL toEntity(ShortURLDTO dto){
        return ShortURL.builder()
                .originalURL(dto.getOriginalURL())
                .build();
    }
}
