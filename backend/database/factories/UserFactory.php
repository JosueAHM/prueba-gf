<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends Factory<User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'identificacion' => fake()->unique()->numerify('#############'),
            'username' => fake()->unique()->userName(),
            'apellidos' => fake()->lastName(),
            'nombres' => fake()->firstName(),
            'fecha_nacimiento' => fake()->date('Y-m-d', '-18 years'),
            'celular' => fake()->numerify('########'),
            'telefono' => fake()->optional()->numerify('########'),
            'correo_personal' => fake()->unique()->safeEmail(),
            'estado_civil' => fake()->randomElement(['Soltero', 'Casado', 'Divorciado', 'Viudo']),
            'sexo' => fake()->randomElement(['Masculino', 'Femenino']),
            'direccion' => fake()->address(),
        ];
    }
}
