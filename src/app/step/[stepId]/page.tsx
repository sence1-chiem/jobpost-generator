"use client";

import { useParams, useRouter } from "next/navigation";
import { useFormContext } from "../../../context/FormContext";
import { questions } from "../../../lib/questions";
import { errorMessages } from "../../../lib/errorMessages";
import { validators } from "../../../lib/validators";
import { Form } from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../../components/ui/button";
import React, { useState } from "react";

// Predefined options for Q11 and Q12
const q11Options = [
	{ value: "internal", label: "internal" },
	{ value: "indeed", label: "indeed" },
];

const q12Tones = [
	{ value: "", label: "トーンを選択" },
	{ value: "formal", label: "フォーマル" },
	{ value: "friendly", label: "フレンドリー" },
	{ value: "casual", label: "カジュアル" },
];

const stepQuestionMap: Record<string, string[]> = {
	step1: ["q1", "q2", "q3"],
	step2: ["q4", "q5", "q6"],
	step3: ["q7", "q8", "q9", "q10"],
	step4: ["q11", "q12"],
};

const stepOrder = ["step1", "step2", "step3", "step4"];

export default function StepPage() {
	const params = useParams();
	const router = useRouter();
	const stepId = params?.stepId as string;
	const { values, setValue } = useFormContext();

	// Find which questions to show for this step
	const questionIds = stepQuestionMap[stepId] || [];
	const stepQuestions = questions.filter(q => questionIds.includes(q.id));

	// Validation state
	const [touched, setTouched] = useState<Record<string, boolean>>({});
	const [errors, setErrors] = useState<Record<string, string>>({});

	const handleChange = (id: string, value: string) => {
		setValue(id.toUpperCase() as any, value);
		if (touched[id]) {
			const isValid = validators[id]?.(value);
			setErrors(prev => ({
				...prev,
				[id]: !isValid ? errorMessages[id as keyof typeof errorMessages] : "",
			}));
		}
	};

	const handleBlur = (id: string, value: string) => {
		setTouched(prev => ({ ...prev, [id]: true }));
		const isValid = validators[id]?.(value);
		setErrors(prev => ({
			...prev,
			[id]: !isValid ? errorMessages[id as keyof typeof errorMessages] : "",
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		let hasError = false;
		const newTouched: Record<string, boolean> = {};
		const newErrors: Record<string, string> = {};
		for (const q of stepQuestions) {
			newTouched[q.id] = true;
			const value = values[q.id.toUpperCase() as keyof typeof values];
			const isValid = validators[q.id]?.(value);
			if (!isValid) {
				hasError = true;
				newErrors[q.id] = errorMessages[q.id as keyof typeof errorMessages];
			} else {
				newErrors[q.id] = "";
			}
		}
		setTouched(newTouched);
		setErrors(newErrors);

		if (!hasError) {
			// Navigation logic for next step
			const currentIdx = stepOrder.indexOf(stepId);
			if (currentIdx !== -1 && currentIdx < stepOrder.length - 1) {
				const nextStep = stepOrder[currentIdx + 1];
				router.push(`/step/${nextStep}`);
			} else if (stepId === "step4") {
				router.push("/confirm");
			}
			// else: do nothing if stepId is not recognized
		}
	};

	return (
		<Form onSubmit={handleSubmit} className="space-y-8 max-w-xl mx-auto mt-8">
			{stepQuestions.map(q => {
				const value = values[q.id.toUpperCase() as keyof typeof values] || "";
				if (q.id === "q11") {
					// Q11: radio buttons
					return (
						<div key={q.id}>
							<label className="block font-medium mb-1">
								{q.label} <span className="text-red-500">*</span>
							</label>
							<div className="flex gap-6 mt-2">
								{q11Options.map(opt => (
									<label key={opt.value} className="flex items-center gap-2">
										<input
											type="radio"
											name="q11"
											value={opt.value}
											checked={value === opt.value}
											onChange={e => handleChange(q.id, e.target.value)}
											onBlur={e => handleBlur(q.id, e.target.value)}
											className="accent-primary"
											required
										/>
										<span>{opt.label}</span>
									</label>
								))}
							</div>
							{q.supplement && (
								<div className="text-sm text-muted-foreground mt-1">{q.supplement}</div>
							)}
							{errors[q.id] && (
								<div className="text-sm text-red-500 mt-1">{errors[q.id]}</div>
							)}
						</div>
					);
				}
				if (q.id === "q12") {
					// Q12: select dropdown (with free text fallback)
					return (
						<div key={q.id}>
							<label htmlFor={q.id} className="block font-medium mb-1">
								{q.label}
							</label>
							<select
								id={q.id}
								value={value}
								onChange={e => handleChange(q.id, e.target.value)}
								onBlur={e => handleBlur(q.id, e.target.value)}
								className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring"
							>
								{q12Tones.map(opt => (
									<option key={opt.value} value={opt.value}>
										{opt.label}
									</option>
								))}
							</select>
							<Input
								id={q.id + "-free"}
								value={value}
								onChange={e => handleChange(q.id, e.target.value)}
								onBlur={e => handleBlur(q.id, e.target.value)}
								placeholder={q.placeholder}
								className="mt-2"
							/>
							{q.supplement && (
								<div className="text-sm text-muted-foreground mt-1">{q.supplement}</div>
							)}
							{errors[q.id] && (
								<div className="text-sm text-red-500 mt-1">{errors[q.id]}</div>
							)}
						</div>
					);
				}
				// Default: textarea or input for other questions
				const isTextarea =
					q.id === "q3" ||
					q.id === "q4" ||
					q.id === "q5" ||
					q.id === "q6" ||
					q.id === "q10";
				return (
					<div key={q.id}>
						<label htmlFor={q.id} className="block font-medium mb-1">
							{q.label} <span className="text-red-500">*</span>
						</label>
						{isTextarea ? (
							<Textarea
								id={q.id}
								value={value}
								onChange={e => handleChange(q.id, e.target.value)}
								onBlur={e => handleBlur(q.id, e.target.value)}
								placeholder={q.placeholder}
								required
								rows={3}
							/>
						) : (
							<Input
								id={q.id}
								value={value}
								onChange={e => handleChange(q.id, e.target.value)}
								onBlur={e => handleBlur(q.id, e.target.value)}
								placeholder={q.placeholder}
								required
							/>
						)}
						{q.supplement && (
							<div className="text-sm text-muted-foreground mt-1">{q.supplement}</div>
						)}
						{errors[q.id] && (
							<div className="text-sm text-red-500 mt-1">{errors[q.id]}</div>
						)}
					</div>
				);
			})}
			<Button type="submit" className="w-full mt-6">
				次へ
			</Button>
		</Form>
	);
}