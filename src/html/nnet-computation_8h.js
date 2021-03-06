var nnet_computation_8h =
[
    [ "MiscComputationInfo", "structkaldi_1_1nnet3_1_1MiscComputationInfo.html", "structkaldi_1_1nnet3_1_1MiscComputationInfo" ],
    [ "IoSpecification", "structkaldi_1_1nnet3_1_1IoSpecification.html", "structkaldi_1_1nnet3_1_1IoSpecification" ],
    [ "IoSpecificationHasher", "structkaldi_1_1nnet3_1_1IoSpecificationHasher.html", "structkaldi_1_1nnet3_1_1IoSpecificationHasher" ],
    [ "ComputationRequest", "structkaldi_1_1nnet3_1_1ComputationRequest.html", "structkaldi_1_1nnet3_1_1ComputationRequest" ],
    [ "ComputationRequestHasher", "structkaldi_1_1nnet3_1_1ComputationRequestHasher.html", "structkaldi_1_1nnet3_1_1ComputationRequestHasher" ],
    [ "ComputationRequestPtrEqual", "structkaldi_1_1nnet3_1_1ComputationRequestPtrEqual.html", "structkaldi_1_1nnet3_1_1ComputationRequestPtrEqual" ],
    [ "NnetComputation", "structkaldi_1_1nnet3_1_1NnetComputation.html", "structkaldi_1_1nnet3_1_1NnetComputation" ],
    [ "MatrixInfo", "structkaldi_1_1nnet3_1_1NnetComputation_1_1MatrixInfo.html", "structkaldi_1_1nnet3_1_1NnetComputation_1_1MatrixInfo" ],
    [ "MatrixDebugInfo", "structkaldi_1_1nnet3_1_1NnetComputation_1_1MatrixDebugInfo.html", "structkaldi_1_1nnet3_1_1NnetComputation_1_1MatrixDebugInfo" ],
    [ "SubMatrixInfo", "structkaldi_1_1nnet3_1_1NnetComputation_1_1SubMatrixInfo.html", "structkaldi_1_1nnet3_1_1NnetComputation_1_1SubMatrixInfo" ],
    [ "Command", "structkaldi_1_1nnet3_1_1NnetComputation_1_1Command.html", "structkaldi_1_1nnet3_1_1NnetComputation_1_1Command" ],
    [ "PrecomputedIndexesInfo", "structkaldi_1_1nnet3_1_1NnetComputation_1_1PrecomputedIndexesInfo.html", "structkaldi_1_1nnet3_1_1NnetComputation_1_1PrecomputedIndexesInfo" ],
    [ "CommandType", "nnet-computation_8h.html#a21e038f5b8958e203d28bc4f18472352", [
      [ "kAllocMatrix", "nnet-computation_8h.html#a21e038f5b8958e203d28bc4f18472352a73b5995148c3e987c4a163ad6bc9850b", null ],
      [ "kDeallocMatrix", "nnet-computation_8h.html#a21e038f5b8958e203d28bc4f18472352ae77588ab7fc4ccf842de7ec941247062", null ],
      [ "kSwapMatrix", "nnet-computation_8h.html#a21e038f5b8958e203d28bc4f18472352a8ecee91c55553bcf2d755d00328b0253", null ],
      [ "kSetConst", "nnet-computation_8h.html#a21e038f5b8958e203d28bc4f18472352a55f8cb2bfd2e2c3605dfa961eff35fa2", null ],
      [ "kPropagate", "nnet-computation_8h.html#a21e038f5b8958e203d28bc4f18472352a26ebe2a579bf27a5453cb7b489ad6f69", null ],
      [ "kBackprop", "nnet-computation_8h.html#a21e038f5b8958e203d28bc4f18472352a7832c022dde05525759677b75b362b83", null ],
      [ "kBackpropNoModelUpdate", "nnet-computation_8h.html#a21e038f5b8958e203d28bc4f18472352afab6637ac4a83d6775366b4e9c42e241", null ],
      [ "kMatrixCopy", "nnet-computation_8h.html#a21e038f5b8958e203d28bc4f18472352a35d3d1a70d075561aaf91b263ea28f74", null ],
      [ "kMatrixAdd", "nnet-computation_8h.html#a21e038f5b8958e203d28bc4f18472352a8ce789ab4782758335cc37349fb97257", null ],
      [ "kCopyRows", "nnet-computation_8h.html#a21e038f5b8958e203d28bc4f18472352a308b0ecf9083a7fde572d88f70af6258", null ],
      [ "kAddRows", "nnet-computation_8h.html#a21e038f5b8958e203d28bc4f18472352ae9638edeb0ada9a6373257fd508ae11f", null ],
      [ "kCopyRowsMulti", "nnet-computation_8h.html#a21e038f5b8958e203d28bc4f18472352a341a9c019757a7f1172d86bad51500a5", null ],
      [ "kCopyToRowsMulti", "nnet-computation_8h.html#a21e038f5b8958e203d28bc4f18472352a5161c1dfc34a4df1b19e9d3b8dc9499c", null ],
      [ "kAddRowsMulti", "nnet-computation_8h.html#a21e038f5b8958e203d28bc4f18472352a26009d8f2bc3f61d214925ae25af9962", null ],
      [ "kAddToRowsMulti", "nnet-computation_8h.html#a21e038f5b8958e203d28bc4f18472352a662aa95978d72cd24fde262e35941fad", null ],
      [ "kAddRowRanges", "nnet-computation_8h.html#a21e038f5b8958e203d28bc4f18472352a86646468234ab036580a4f2e4d72af3c", null ],
      [ "kCompressMatrix", "nnet-computation_8h.html#a21e038f5b8958e203d28bc4f18472352a19758aa995e3baa1aa2cef6528d10fb9", null ],
      [ "kDecompressMatrix", "nnet-computation_8h.html#a21e038f5b8958e203d28bc4f18472352a0260a200407f88708e5c2793506e4ada", null ],
      [ "kAcceptInput", "nnet-computation_8h.html#a21e038f5b8958e203d28bc4f18472352a6b396f5162883c2f4fb837a2af4b8895", null ],
      [ "kProvideOutput", "nnet-computation_8h.html#a21e038f5b8958e203d28bc4f18472352aaa3fd92744438323baec475cee5b9b3d", null ],
      [ "kNoOperation", "nnet-computation_8h.html#a21e038f5b8958e203d28bc4f18472352a79ca9eaa954dd29bb0671fb99e550439", null ],
      [ "kNoOperationPermanent", "nnet-computation_8h.html#a21e038f5b8958e203d28bc4f18472352af9786d4042a4fcf23b29a14a6fb64126", null ],
      [ "kNoOperationMarker", "nnet-computation_8h.html#a21e038f5b8958e203d28bc4f18472352af67517e882c1aebe145a016945b9e6a4", null ],
      [ "kNoOperationLabel", "nnet-computation_8h.html#a21e038f5b8958e203d28bc4f18472352a967844c2c7775d280d15738cbe852536", null ],
      [ "kGotoLabel", "nnet-computation_8h.html#a21e038f5b8958e203d28bc4f18472352add9060e8c7434f250048082c634d9a6d", null ]
    ] ],
    [ "operator<<", "nnet-computation_8h.html#a63bbb226b5063936684810e9cc6f830a", null ]
];