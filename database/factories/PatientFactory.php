<?php

namespace Database\Factories;

use App\Models\Patient;
use Illuminate\Database\Eloquent\Factories\Factory;

class PatientFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Patient::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $department = config('patients.department');
        return [
            'name' => $this->faker->name(),
            'birthday' => $this->faker->date(),
            'jop' => $this->faker->jobTitle,
            'phone' => $this->faker->phoneNumber,
            'gender' => $this->faker->randomElement(['male','female'],1),
            'dep' => $this->faker->randomElement($department,1)
        ];
    }
}
