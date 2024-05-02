import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "semantic-ui-react";
import { auth } from "../main";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";


export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    
}
