package com.neptune.shiv.service;

import java.util.List;

import com.neptune.shiv.dto.request.UserRequestDto;
import com.neptune.shiv.dto.response.UserResponseDto;

public interface UserService {

	boolean saveUser(UserRequestDto userRequest);

	List<UserResponseDto> getAllUser();

	UserResponseDto updateUser(UserRequestDto userRequest, int id);

	boolean deleteUser(int id);
	
}