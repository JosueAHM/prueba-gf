<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'identificacion' => ['required', 'string', 'unique:users,identificacion'],
            'username' => ['required', 'string', 'unique:users,username'],
            'apellidos' => ['required', 'string', 'max:255'],
            'nombres' => ['required', 'string', 'max:255'],
            'fecha_nacimiento' => ['required', 'date', 'before:today'],
            'celular' => ['required', 'string', 'max:20'],
            'telefono' => ['nullable', 'string', 'max:20'],
            'correo_personal' => ['required', 'email', 'unique:users,correo_personal'],
            'estado_civil' => ['required', 'string', 'max:50'],
            'sexo' => ['required', 'string', 'max:20'],
            'direccion' => ['required', 'string'],
        ];
    }
}
