"use client";

import React from "react";
import { useFormContext } from "../../../context/FormContext";
import { Form } from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Button } from "../../../components/ui/button";

export default function Step1() {
  const { values, setValue } = useFormContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigation will be handled later
  };

  return (
    <Form>
      <form onSubmit={handleSubmit} className="space-y-8 max-w-xl mx-auto mt-8">
        {/* Q1 */}
        <div>
          <label htmlFor="q1" className="block font-medium mb-1">
            募集職種タイトル <span className="text-red-500">*</span>
          </label>
          <Input
            id="q1"
            value={values.Q1}
            onChange={e => setValue("Q1", e.target.value)}
            placeholder="例：営業事務スタッフ"
            required
          />
          <div className="text-sm text-muted-foreground mt-1">
            例：営業事務スタッフ
          </div>
        </div>

        {/* Q2 */}
        <div>
          <label htmlFor="q2" className="block font-medium mb-1">
            想定される役割 <span className="text-red-500">*</span>
          </label>
          <Input
            id="q2"
            value={values.Q2}
            onChange={e => setValue("Q2", e.target.value)}
            placeholder="例：受発注管理、顧客対応"
            required
          />
          <div className="text-sm text-muted-foreground mt-1">
            例：受発注管理、顧客対応
          </div>
        </div>

        {/* Q3 */}
        <div>
          <label htmlFor="q3" className="block font-medium mb-1">
            募集背景 <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="q3"
            value={values.Q3}
            onChange={e => setValue("Q3", e.target.value)}
            placeholder="例：事業拡大に伴う増員募集です。"
            rows={3}
            required
          />
          <div className="text-sm text-muted-foreground mt-1">
            例：事業拡大に伴う増員募集です。
          </div>
        </div>

        <Button type="submit" className="w-full mt-6">
          次へ
        </Button>
      </form>
    </Form>
  );
}