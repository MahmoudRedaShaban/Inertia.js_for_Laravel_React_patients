<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class PatientController extends Controller
{
    private $rules = [];
    private $patientCatgory;

    public function __construct()
    {
        $this->patientCatgory = config('patients.department');
        $this->rules = [
            "name"=> ['required', 'min:3', 'string'],
            "birthday"=> ['required', 'date'],
            "jop" => ['required','min:2'],
            "dep" => ['required', Rule::in($this->patientCatgory)],
            "phone" => ['required'],
            "gender"=> ['required', Rule::in(['male', 'female'])]
        ];
    }
    
    public function index()
    {
        $patient = Patient::orderByDesc('id')->paginate(10);
        return Inertia::render('Patientes/index', [
            'patientes' => $patient,
        ]);
    }

    public function show(Patient $patient)
    {
        return  Inertia::render('Patientes/view/index',[
            "patiente" => $patient,
            "department" => $this->patientCatgory,
        ]);
    }

    public function update(Request $request)
    {
        $this->rules['id'] = ['required', 'exists:patients,id'];
        $postData = $this->validate($request, $this->rules);

        $patientId = $postData['id'];
        unset($postData['id']); //not update this id 

        Patient::where('id',$patientId)->update($postData);
        return  redirect()->back()->with('success',"Updated Successfuly Patient.!");
    }
    public function add()
    {
        return Inertia::render('Patientes/add/index',[
            "patiente" => new Patient,
            "department" => $this->patientCatgory,
        ]);
    }
    public function store(Request $request)
    {
        $postData = $this->validate($request, $this->rules);
        // $postData['user_id'] = Auth::user()->id;

        Patient::create($postData);

        return redirect(route('patient.list'))
            ->with('success',"Add Successfuly Patient.!");
    }

    public function delete(Patient $patient)
    {
        if($patient->delete()){
            return redirect(route('patient.list'))->with('success','Successfuly Delete Patient');
        }
    }
}
