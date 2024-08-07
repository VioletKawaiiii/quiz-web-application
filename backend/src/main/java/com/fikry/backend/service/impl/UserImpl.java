package com.fikry.backend.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fikry.backend.dto.UserDTO;
import com.fikry.backend.repository.UserRepository;
import com.fikry.backend.service.UserService;

@Service
public class UserImpl implements UserService {
     @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<UserDTO> getAllUsers(){
        return userRepository.findAll()
                .stream()
                .map(user -> modelMapper.map(user, UserDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public Optional<UserDTO> getUserById(Long id){
        return userRepository.findById(id).map(user -> modelMapper.map(user, UserDTO.class));

    }

    @Override
    public Optional<UserDTO> getUserByUsername(String username){
        return userRepository.findByUsername(username).map(user -> modelMapper.map(user, UserDTO.class));
    }

    @Override
    public Optional<UserDTO> getUserByEmail(String email){
        return userRepository.findByEmail(email).map(user -> modelMapper.map(user, UserDTO.class));
    }

    @Override
    public Optional<UserDTO> getUserByRole(String role){
        return userRepository.findByRole(role).map(user -> modelMapper.map(user, UserDTO.class));
    }

    @Override
    public void deleteUserById(Long id){
        userRepository.deleteById(id);
    }

}
