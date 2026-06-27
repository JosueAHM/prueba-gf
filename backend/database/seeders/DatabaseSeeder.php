<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'identificacion' => '0402199300001',
            'username' => 'JhonDoe',
            'apellidos' => 'Doe',
            'nombres' => 'Jhon',
            'fecha_nacimiento' => '1993-02-04',
            'celular' => '89017676',
            'telefono' => null,
            'correo_personal' => 'jhondoe@gmail.com',
            'estado_civil' => 'Soltero',
            'sexo' => 'Masculino',
            'direccion' => 'Res. Los heroes, block 18, casa 3',
        ]);
    }
}
