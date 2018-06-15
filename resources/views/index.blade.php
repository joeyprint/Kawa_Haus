@extends('layouts.default')

@section('title')
    Sansiri Oka
@endsection

@section('custom_head')
    <link rel="stylesheet" href="{{ asset('/css/banner.css') }}">
@endsection

@section('content')
    @include('components.banner')
@endsection

@section('custom_script')

@endsection