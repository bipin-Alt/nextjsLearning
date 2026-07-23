import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function AddBlog() {
    return (
        <div className="max-w-3xl mx-auto my-12 px-4">
            <div className="rounded-lg border bg-white p-6 shadow-sm dark:bg-neutral-900">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Create a new blog</h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Share what you experienced today.</p>

                <form className="mt-6 space-y-6">
                    <div>
                        <Label htmlFor="title">Blog Title</Label>
                        <Input id="title" name="title" type="text" placeholder="Trek To Everest Base Camp" />
                    </div>

                    <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" name="description" rows={6} placeholder="Write something about your experience" />
                    </div>

                    <div>
                        <Label htmlFor="image">Cover Image</Label>
                        <div className="mt-1">
                            <input
                                id="image"
                                name="image"
                                type="file"
                                accept="image/png,image/jpeg"
                                className="sr-only"
                            />

                            <label
                                htmlFor="image"
                                className="flex items-center justify-between rounded-md border-2 border-dashed border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                            >
                                <div className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V7.414A2 2 0 0016.414 6L13 2.586A2 2 0 0011.586 2H4z" />
                                    </svg>
                                    <span>Click to upload or drag and drop</span>
                                </div>
                                <span className="ml-4 text-xs text-gray-500">PNG or JPG</span>
                            </label>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Button type="submit">Add Blog</Button>
                        <Link href={"/blogfeed"}>
                         <Button type="button" className="bg-gray-200 text-gray-800 hover:bg-gray-300">
                            Feed
                        </Button>
                        </Link>
                       
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddBlog