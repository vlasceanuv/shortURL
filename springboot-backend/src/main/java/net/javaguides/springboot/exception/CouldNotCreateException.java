package net.javaguides.springboot.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.FAILED_DEPENDENCY)
public class CouldNotCreateException extends RuntimeException{

	private static final long serialVersionUID = 1L;

	public CouldNotCreateException(String message) {
		super(message);
	}
}
